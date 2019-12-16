import { connect } from "react-redux";
import Birthday from "./birthday";

const mSTP = state => {
    return {
        bdayUser: state.entities.users[5]
    }
}

export default connect(mSTP)(Birthday);