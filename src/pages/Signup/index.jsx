import { FaLock, FaUserAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Container, Content } from "./styles";
import { celularMascara } from "../../utils/phoneMask";
import { useEffect, useState } from "react";

export const SignUp = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo é obrigatório"),
    email: yup.string().required("Campo é obrigatório").email(),
    password: yup
      .string()
      .required("Campo é obrigatório")
      .min(8, "Senha deve conter no mínimo 8 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo é obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas não conferem"),
    phone: yup.string().required("Campo é obrigatório"),
  });

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const phoneWatch = useWatch({ control, name: "phone" });

  const handlePhoneMask = () => {
    setValue("phone", celularMascara(phoneWatch));
  };

  const onSubmitFunction = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  useEffect(() => {
    handlePhoneMask(phoneWatch);
  }, [phoneWatch]);

  return (
    <>
      <Container>
        <Content>
          {submitted ? (
            <div>Cadastro realizado com sucesso</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h2>Cadastro</h2>
              <Input
                label="Nome"
                icon={FaUserAlt}
                name="username"
                type="text"
                register={register}
                error={errors.username?.message}
              />
              <Input
                label="Email"
                icon={FaEnvelope}
                name="email"
                type="email"
                register={register}
                error={errors.email?.message}
              />
              <Input
                label="Telefone"
                icon={FaPhone}
                name="phone"
                type="text"
                register={register}
                error={errors.email?.message}
                mask={celularMascara}
              />
              <Input
                label="Senha"
                icon={FaLock}
                type="password"
                name="password"
                register={register}
                error={errors.password?.message}
              />
              <Input
                label="Confirmar senha"
                icon={FaLock}
                type="password"
                name="passwordConfirm"
                register={register}
                error={errors.passwordConfirm?.message}
              />
              <Button>Cadastrar</Button>
            </form>
          )}
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
