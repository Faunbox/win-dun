import axios from "axios";
import { useState, useContext, createContext } from "react";

const FormContext = createContext();

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const [emailContent, setEmailContent] = useState({
    what: true,
    cityFrom: "",
    streetFrom: "",
    to: "",
    date: "",
    ppl: "",
    name: "",
    number: "",
    email: "",
    activate: false,
    honey: false,
    isSend: false,
  });

  const contactFormEmailToOwner = async () => {
    //Spambot check
    if (emailContent.honey) return;
    //
    console.log(emailContent);
    await axios({
      method: "POST",
      // url: "/api/nodemailer",
      url: "/api/nodemailer",
      data: {
        email: emailContent.email,
        from: emailContent.from,
        to: emailContent.to,
        date: emailContent.date,
        ppl: emailContent.ppl,
        name: emailContent.name,
        number: emailContent.number,
      },
    })
      .then(
        (response) => response.status === 250 && alert(response.data.success)
      )
      .catch(
        (err) => alert(err.error),
        setEmailContent((prevState) => ({
          ...prevState,
          isSend: false,
        }))
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Spambot check
    if (emailContent.honey) return;

    //prevent double email send
    // if (emailContent.isSend) return alert("isSend");

    //email send function
    setEmailContent((prevState) => ({
      ...prevState,
      isSend: true,
    }));
    await contactFormEmailToOwner(emailContent);
    setTimeout(() => {
      setEmailContent((prevState) => ({ ...prevState, activate: false }));
    }, 500);
  };

  const value = { emailContent, setEmailContent, handleSubmit };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
