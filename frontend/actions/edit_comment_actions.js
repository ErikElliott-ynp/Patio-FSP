export const EDIT_COMMENT = "EDIT_COMMENT";
export const CLOSE_EDIT = "CLOSE _EDIT";

export const editComment = () => {
    return {
        type: EDIT_COMMENT
    }
}

export const closeEdit = () => {
    return {
        type: CLOSE_EDIT
    }
}

