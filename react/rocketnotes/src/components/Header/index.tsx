import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";

const user = {
  name: "John Doe",
  avatar: "/adhmattheus", // or provide a mock avatar URL
};

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/adhmattheus.png" alt="user" />
        <div>
          <span>Welcome</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine
          onClick={() => {
            alert("saiu");
          }}
        />
      </Logout>
    </Container>
  );
}
