
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: '#2E2739', // orange
    secondary: "#F6F6FA",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#827D88",
    iceblue: "#61C3F2",
    lightGray3: "#DBDBDF",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    lightGreen:'#15D2BC'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 15,
    padding:2,
    padding1: 5,
    padding2: 10,
    padding3: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

// export const FONTS = {
//     largeTitle: { fontFamily: "Satoshi-Regular", fontSize: SIZES.largeTitle, lineHeight: 55, color: COLORS.black },
//     h1: { fontFamily: "Satoshi-Bold", fontSize: SIZES.h1, lineHeight: 36, color: COLORS.black },
//     h2: { fontFamily: "Satoshi-Bold", fontSize: SIZES.h2, lineHeight: 30, color: COLORS.black },
//     h3: { fontFamily: "Satoshi-Bold", fontSize: SIZES.h3, lineHeight: 22, color: COLORS.black },
//     h4: { fontFamily: "Satoshi-Bold", fontSize: SIZES.h4, lineHeight: 22, color: COLORS.black },
//     body1: { fontFamily: "Satoshi-Regular", fontSize: SIZES.body1, lineHeight: 36, color: COLORS.black },
//     body2: { fontFamily: "Satoshi-Regular", fontSize: SIZES.body2, lineHeight: 30, color: COLORS.black },
//     body3: { fontFamily: "Satoshi-Regular", fontSize: SIZES.body3, lineHeight: 22, color: COLORS.black },
//     body4: { fontFamily: "Satoshi-Regular", fontSize: SIZES.body4, lineHeight: 22, color: COLORS.black },
//     body5: { fontFamily: "Satoshi-Regular", fontSize: SIZES.body5, lineHeight: 22, color: COLORS.black },
// };
