import { Button, Icon } from "@rneui/base";
import { SafeAreaView } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      <Button radius={"sm"} type="solid">
        Save
        <Icon name="save" color="white" />
      </Button>
    </SafeAreaView>
  );
}

export default App;
