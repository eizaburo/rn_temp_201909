//変数
export const UPDATE_NAME = 'UPDATE_NAME';

//actions
export const updateName = name => (
    {
        type: UPDATE_NAME,
        name: name,
    }
);