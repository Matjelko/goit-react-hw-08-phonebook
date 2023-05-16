import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div>
            <p>Welcom, {user.name}</p>
            {/* <button type="button" onClick={() => dispatch(logOut())}>
                LogOut
            </button> */}
        </div>
    )
}