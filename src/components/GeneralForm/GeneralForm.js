import { StyledForm, StyledDiv, Logo } from "../styles/GeneralForm.styled";
import { StyledInput } from "../styles/Input.styled";
import { StyledButton } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { Errors } from "../styles/Errors.styled";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confimPassword: ""
    },
    validationSchema: basicSchema,
    onSubmit
  });
  return (
    <>
      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <Logo src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" />
          <StyledDiv>
            <StyledInput
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="E-Posta Adresi"
            />
            {errors.email && <Errors>{errors.email}</Errors>}
          </StyledDiv>
          <StyledDiv>
            <StyledInput
              type="number"
              id="age"
              value={values.age}
              onChange={handleChange}
              placeholder="Yaş"
            />
            {errors.age && <Errors>{errors.age}</Errors>}
          </StyledDiv>
          <StyledDiv>
            <StyledInput
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Şifre"
            />
            {errors.password && <Errors>{errors.password}</Errors>}
          </StyledDiv>
          <StyledDiv>
            <StyledInput
              type="password"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Şifre Tekrar"
            />
            {errors.confirmPassword && (
              <Errors>{errors.confirmPassword}</Errors>
            )}
          </StyledDiv>
          <StyledButton disabled={isSubmitting} type="submit">
            Kayıt Ol
          </StyledButton>
        </StyledForm>
      </Container>
    </>
  );
}
export default GeneralForm;
