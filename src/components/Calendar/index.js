import React, { useState } from "react";
import { useRef } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import { LocaleConfig, Calendar as LibCalendar } from "react-native-calendars";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const monthNamesShort = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const dayNamesShort = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

LocaleConfig.locales.fr = {
  monthNames,
  monthNamesShort,
  dayNames,
  dayNamesShort,
};

LocaleConfig.defaultLocale = "fr";

const Calendar = () => {
  const promiseInfo = useRef(null);

  const [isVisible, setVisible] = useState(false);
  const [date, setDate] = useState({ start: "", end: "" });
  const [markedDates, setMarkedDates] = useState({
    "2022-08-15": {
      customStyles: {
        container: {
          backgroundColor: "green",
        },
        text: {
          color: "black",
          fontWeight: "bold",
        },
      },
    },
    "2022-08-16": {
      customStyles: {
        container: {
          backgroundColor: "green",
          elevation: 2,
        },
        text: {
          color: "blue",
        },
      },
    },
    "2022-08-17": {
      customStyles: {
        container: {
          backgroundColor: "red",
          elevation: 2,
        },
        text: {
          color: "blue",
        },
      },
    },
  });

  Calendar.show = () =>
    new Promise((resolve, reject) => {
      setVisible(true);

      promiseInfo.current = { resolve, reject };
    });

  const handlePress = () => {
    const { start, end } = date;

    if (start && end) {
      setVisible(false);
      setDate(INITIAL_FILTER_DATE);
      promiseInfo.current.resolve(date);
    } else Alert.alert("Aviso", "Para filtrar preencha início e fim");
  };

  const onRequestClose = () => {
    setVisible(false);

    promiseInfo.current.resolve();
  };

  return (
    <Modal
      statusBarTranslucent
      transparent
      animationType='fade'
      onRequestClose={onRequestClose}
      visible={isVisible}
      presentationStyle='overFullScreen'>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.description}>
              {`${date.start || "Início"} - ${date.end || "Fim"}`}
            </Text>
          </View>
          <LibCalendar
            style={styles.calendar}
            onDayPress={day => {
              console.log("selected day", day);
            }}
            renderHeader={date => (
              <Text style={styles.date}>{`${
                monthNames[date.getMonth()]
              } - ${date.getFullYear()}`}</Text>
            )}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log("selected day", day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"yyyy MM"}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log("month changed", month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            markingType={"custom"}
            markedDates={markedDates}
            hideExtraDays={false}
            disableMonthChange={false}
            firstDay={1}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={false}
            disableArrowRight={false}
            renderArrow={direction => (
              <MaterialIcons name={`arrow-${direction}`} size={24} color={"#555"} />
            )}
            disableAllTouchEventsForDisabledDays={true}
            enableSwipeMonths={true}
          />
          <View style={styles.footer}>
            <CustomButton title={"Cancelar"} onPress={onRequestClose} />
            <CustomButton title={"Ok"} onPress={handlePress} containerStyle={styles.acceptButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    backgroundColor: "white",
  },
  header: {
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 8,
    paddingBottom: 16,
  },
  acceptButton: {
    marginLeft: 12,
    marginRight: 16,
  },
  calendar: {
    minWidth: 280,
    paddingHorizontal: 16,
  },
  description: {
    color: "white",
    fontFamily: FONT_DEFAULT_STYLE,
  },
  date: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#555",
  },
});

export default Calendar;
