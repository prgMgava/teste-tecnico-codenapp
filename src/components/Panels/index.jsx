import { Button } from "../Button";
import LogImage from "../../assets/img/log.svg";
import RegisterImage from "../../assets/img/register.svg"
import { Container, Content, Panel } from "./styles";
import { useHistory } from "react-router-dom";
import { useSignIn } from "../../Provider";


const Panels = ({ children, panelDirection = false, path }) => {
  const history = useHistory();
  const { setIsSignIn, isSignIn } = useSignIn();

  function handleClick() {  
    history.push(path)
    if (path === "/signup") {
        setIsSignIn(false)
    } else {
        setIsSignIn(true)
    }
};
  
  return (
    <Container isSignIn={isSignIn}>
      <Panel panelDirection={panelDirection} isSignIn={isSignIn}>
        <Content isSignIn={isSignIn}>
          <h3>New here?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi
            accusantium itaque nobis recusandae fugiat temporibus debitis
            doloribus numquam fugit.
          </p>
          <Button onClick={handleClick}>Sign Up</Button>
        </Content>
        <img src={isSignIn ? LogImage : RegisterImage} alt={ isSignIn ? "Login" : "Register"} />
      </Panel>
    </Container>
  );
};

export default Panels;
