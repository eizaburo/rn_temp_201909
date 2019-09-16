//変数
export const UPDATE_NAME = 'UPDATE_NAME';
export const GET_VALUE_FROM_SERVER = 'GET_VALUE_FROM_SERVER';

//actions
export const updateName = name => (
    {
        type: UPDATE_NAME,
        name: name,
    }
);

export const getValueFromServer = () => async (dispatch, getState) => {

    const response = await fetch('http://www.bluecode.jp/test/api.php');
    const json = await response.json();

    dispatch(
        {
            type: GET_VALUE_FROM_SERVER,
            name: json.message
        }
    );
}