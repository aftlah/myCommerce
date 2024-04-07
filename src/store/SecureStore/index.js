import * as SecureStore from 'expo-secure-store';

const saveData = async (key, value) => {
    try {
        await SecureStore.setItemAsync(key, value);
        console.log('Data saved successfully');
        
    } catch (error) {
        console.log('Error saving data:', error);
        return false
    }
};

const getData = async (key) => {
    try {
        const value = await SecureStore.getItemAsync(key);
        if (value !== null) {
            // console.log('Data retrieved successfully:', value);
            return value;
        } else {
            console.log('No data found for the given key');
        }
    } catch (error) {
        console.log('Error retrieving data:', error);
    }
};

const deleteData = async (key) => {
    try {
        await SecureStore.deleteItemAsync(key);
        console.log('Data deleted successfully');
    } catch (error) {
        console.log('Error deleting data:', error);
    }
};

export { saveData, getData, deleteData };