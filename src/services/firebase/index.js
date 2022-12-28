import analytics from '@react-native-firebase/analytics';

export const logEvent = async (event, {screen_name, content_type, description = '' }) => {
    await analytics().logEvent(event, {
        screen_name: screen_name,
        content_type: content_type,
        description: description
    });
};

export const logScreen = async (screen) => {
    await analytics().logScreenView({screen_name: screen});
};
