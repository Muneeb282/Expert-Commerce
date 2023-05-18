import { Container} from "./styles";
import { useEffect, useState,  } from "react";
import {  Formik, Form } from "formik";
import validator from "validator";
export function FormComponent() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  useEffect(() => {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [email]);

  const handleSubmit = async () => {
    console.log(message, "message");
    console.log(email, "email");
    console.log(validEmail, "validEmail");

    // if (message === "") {
    //   setErrorMessage("");
    //   return setErrorMessage("Enter message");
    // }
    // if (!validEmail) {
    //   setErrorMessage("");
    //   return setErrorMessage("enter valid email ");
    // }
    if (validEmail && message !== "") {
      const endPoint =
        // "https://public.herotofu.com/v1/d25bfba0-6f4a-11ed-a377-655c67143cec";
        "https://public.herotofu.com/v1/d0985740-90f7-11ed-a003-6f0b76086b1c";
      console.log({ message, email }, "myValues");
      fetch(endPoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, email }),
      }).then((res) => {
        console.log(res);
        setMessage("");
        setEmail("");
        window.location.reload();
      });
    }
  };

  return (
    <Container>
      <h2>Entre em contato a partir do formulário abaixo</h2>
      <Formik
        initialValues={{
          email: "",
          message: "",
        }}
        onSubmit={(values) => {
          console.log("values");
        }}
      >
        <Form>
          <input
            placeholder="email"
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <textarea
            required
            placeholder="Deixe sua mensagem"
            id="message"
            name="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </Form>
      </Formik>
    </Container>
  );
}
