"use client"
// imports
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import CartStore from "@/components/Cart/CartStore"
/**
 * 
 * @param props 
 * @returns 
 */
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <CartStore>
      <ColorModeProvider {...props} />
      </CartStore>
    </ChakraProvider>
  )
}
