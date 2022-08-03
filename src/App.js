import { Group, Header } from "@mantine/core";
import { AppTitle } from "./components/AppTitle/AppTitle";
import { AddNewTimerListItemButtonContainer } from "./containers/AddNewTimerListItemButtonContainer.js";
import { TimerListContainer } from "./containers/TimerListContainer/TimerListContainer";

function App() {
  return (
    <div className="App">
      <Header height={60} p="xs">
        <Group position="apart">
          <AppTitle />
          <AddNewTimerListItemButtonContainer />
        </Group>
      </Header>
      <TimerListContainer />
    </div>
  );
}

export default App;
