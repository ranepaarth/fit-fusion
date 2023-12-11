export { default as moonIcon } from "./assets/moon-svgrepo-com.svg";
export { default as sunIcon } from "./assets/sun-svgrepo-com.svg";

//components export
export { default as EmptyWorkoutCard } from "./components/EmptyWorkoutCard";
export { default as WorkoutsSection } from "./components/WorkoutsSection";
export {default as Footer} from './components/Footer'

//WorkoutCard
export { default as WorkoutCard } from "./components/WorkoutCard/WorkoutCard";
export { default as WorkoutDetail } from "./components/WorkoutCard/WorkoutDetail";
export { default as WorkoutTitle } from "./components/WorkoutCard/WorkoutTitle";
export {default as WorkoutCreatedAt} from './components/WorkoutCard/WorkoutCreatedAt'

//Navbar
export { default as Logo } from "./components/Navbar/Logo";
export { default as Navbar } from "./components/Navbar/Navbar";
export {default as NavItem} from './components/Navbar/NavItem'
export {default as DarkModeToggleBtn} from './components/Navbar/DarkModeToggleBtn'


//WorkoutForm
export { default as FormInputLoads } from "./components/WorkoutForm/FormInputLoads";
export { default as FormInputReps } from "./components/WorkoutForm/FormInputReps";
export { default as FormInputSets } from "./components/WorkoutForm/FormInputSets";
export { default as FormInputTitle } from "./components/WorkoutForm/FormInputTitle";
export { default as FormWorkoutError } from "./components/WorkoutForm/FormWorkoutError";
export { default as WorkoutsForm } from "./components/WorkoutForm/WorkoutsForm";

//contexts export
export {default as useAuthContext} from './context/AuthContext'
export { default as useDarkModeContext } from "./context/DarkModeContext";
export { default as useWorkoutContext } from "./context/WorkoutContext";

//layouts export
export { default as RootLayout } from "./layouts/RootLayout";

//pages export
export { default as Home } from "./pages/Home";
export {default as SignUp} from './pages/SignUp.jsx'
export {default as LogIn} from './pages/LogIn.jsx'