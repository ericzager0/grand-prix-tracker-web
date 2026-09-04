import getRandomCompound, { tireColors } from "@/utils/tireColors";

export const CARD_DATA = [
    { brand: "Visa", last4: "4242", holderName: "Octavio", glowColor: tireColors[getRandomCompound() as keyof typeof tireColors] }, 
    { brand: "Mastercard", last4: "8812", holderName: "Octavio", glowColor: tireColors[getRandomCompound() as keyof typeof tireColors] },
];

export default CARD_DATA;