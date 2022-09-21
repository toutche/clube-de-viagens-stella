import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

const config = {
    screens: {
        DetailsPackages: {
            path: "package/:id",
            parse: {
                id: (id) => `${id}`,
            },
        },
        Alert: "alert"
    }
};

const linking = {
    prefixes: [prefix],
    config
};

export default linking;