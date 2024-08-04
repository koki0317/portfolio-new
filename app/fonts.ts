import { Cedarville_Cursive, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const cedarville_cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"],
});
