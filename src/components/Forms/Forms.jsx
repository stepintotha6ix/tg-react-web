import React, { useState } from "react";
import "./Forms.css";
import { useEffect } from "react";
 
import { useTelegram } from "../../hooks/useTelegram";




const Forms = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("");
  const {tg} = useTelegram()


  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
    return () => {};
  }, []);

  useEffect(() => {
    if(!street || !country){
      this.MainButton.hide()
    }else{
      tg.MainButton.show()
    }
  }, [country, street])
  


  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Страна"}
        value={country}
        onChange={onChangeCountry}
      ></input>
      <input
        className={"input"}
        type="text"
        placeholder={"Улица"}
        value={street}
        onChange={onChangeStreet}
      ></input>
      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"Friend"}>Заказать на адрес другого человека</option>
        <option value={"Me"}>Заказать на свой адрес</option>
      </select>
    </div>
  );
};

export default Forms;
