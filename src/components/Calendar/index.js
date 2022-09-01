import React, { useState } from "react";
import { useRef } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";
import { LocaleConfig, Calendar as LibCalendar } from "react-native-calendars";
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import moment from "moment";
import { formatDateToBRL } from "../../utils";

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

const renderHeader = date => (
  <Text style={styles.date}>{`${monthNames[date.getMonth()]} - ${date.getFullYear()}`}</Text>
);

const renderArrow = direction => (
  <MaterialIcons name={`arrow-${direction}`} size={24} color={"#555"} />
);

const initialDate = {
  marked: {},
  start: "",
  end: "",
  isStart: true,
  isEnd: false,
};

const markedTip = {
  customStyles: {
    container: {
      backgroundColor: PRIMARY_COLOR,
    },
    text: {
      color: "white",
    },
  },
};

const markedToFill = {
  customStyles: {
    container: {
      backgroundColor: BLUE_COLOR,
    },
    text: {
      color: "white",
    },
  },
};

const Calendar = () => {
  const promiseInfo = useRef(null);

  const [isVisible, setVisible] = useState(false);
  const [date, setDate] = useState(initialDate);

  Calendar.show = () =>
    new Promise((resolve, reject) => {
      setVisible(true);

      promiseInfo.current = { resolve, reject };
    });

  const onClose = date => {
    setVisible(false);
    setDate(initialDate);
    promiseInfo.current.resolve(date);
  };

  const handlePress = () => {
    const { start, end } = date;
    if (date.isEnd) onClose({ start, end });
    else Alert.alert("Aviso", "Para filtrar preencha início e fim");
  };

  const onRequestClose = () => onClose();

  const betweenTheDatesToFill = (obj, isInverted) => {
    const list = Object.keys(obj);
    const length = list.length;

    let first = isInverted ? list[length - 1] : list[0];
    let last = isInverted ? list[0] : list[length - 1];

    var initial = moment(first).startOf("day");
    var final = moment(last).startOf("day");

    while (initial.add(1, "days").diff(final) < 0)
      obj[initial.clone().format("YYYY-MM-DD")] = markedToFill;

    return obj;
  };

  const onDayPress = day => {
    let obj = { ...date };

    if (date.isStart) {
      obj = {
        isStart: false,
        isEnd: false,
        start: day.dateString,
        marked: {
          [day.dateString]: markedTip,
        },
      };
    } else if (date.start !== day.dateString) {
      let initial = date.start;
      let final = day.dateString;
      let isInverted = false;

      if (new Date(initial) > new Date(final)) {
        initial = day.dateString;
        final = date.start;
        isInverted = true;
      }

      obj = {
        isStart: true,
        isEnd: true,
        start: initial,
        end: final,
        marked: betweenTheDatesToFill(
          {
            ...obj.marked,
            [day.dateString]: markedTip,
          },
          isInverted,
        ),
      };
    } else return;

    setDate(obj);
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
              {`${formatDateToBRL(date.start) || "Início"} - ${formatDateToBRL(date.end) || "Fim"}`}
            </Text>
          </View>
          <LibCalendar
            style={styles.calendar}
            theme={theme}
            onDayPress={onDayPress}
            renderHeader={renderHeader}
            onMonthChange={month => {}}
            hideArrows={false}
            markingType={"custom"}
            markedDates={date.marked}
            hideExtraDays={false}
            disableMonthChange={false}
            firstDay={1}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={false}
            disableArrowRight={false}
            renderArrow={renderArrow}
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

const theme = {
  backgroundColor: "#ffffff",
  calendarBackground: "#ffffff",
  dayTextColor: "#555",
  textDayFontSize: 14,
  todayTextColor: PRIMARY_COLOR,
  todayBackgroundColor: "white",
  textDisabledColor: "#d9e1e8",
  textDayFontFamily: FONT_DEFAULT_STYLE,
  textDayHeaderFontFamily: FONT_DEFAULT_STYLE,
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
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
