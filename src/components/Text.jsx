import React from 'react'

const Text = () => {
    const [text, setText] = React.useState("Поле ввода");

    const handlerInput = (e) => {
        setText(e.target.value);
    }

    React.useEffect(() => {
        console.log(text);
    }, [text])


    return (
        <div>
            <input type="text" value={text} onChange={handlerInput} />
        </div>
    );
};

export default Text;
