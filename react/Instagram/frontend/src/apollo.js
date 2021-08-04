// redux와 context를 결합한 apollo의 MakeVar
import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
