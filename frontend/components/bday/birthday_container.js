import { connect } from "react-redux";
import Birthday from "./birthday";

const mSTP = state => {
    return {
        bdayUser: state.entities.users[4]
    }
}

export default connect(mSTP)(Birthday);