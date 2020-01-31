const Observable = require("tns-core-modules/data/observable").Observable;
const fileSystem = require("tns-core-modules/file-system");
function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        const txtFilePath = fileSystem.path.join(fileSystem.knownFolders.currentApp().path, "my-custom-dir", "resources.txt");
        const content = fileSystem.File.fromPath(txtFilePath).readTextSync();

        viewModel.set("message", content);
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
