import { useAppContext } from "../../context/AppContext";

const MainWrapper = ({ children }: any) => {
    const { appState } = useAppContext();

    return appState != "intro" && <div id="main">
        { children }
    </div>
}

export default MainWrapper;