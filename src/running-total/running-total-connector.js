import { connect } from 'react-redux';
import RunningTotal from "./running-total";

export const mapStateToProps = state => {
    return {
        something: state.something
    }
};

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RunningTotal);