import { Lilita_One, Roboto } from "next/font/google"

export const lilita_one = Lilita_One({
    weight: "400",
    style: "normal",
    subsets: ["latin"]
})

export const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"]
})