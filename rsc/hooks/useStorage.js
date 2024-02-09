import AsyncStorage from "@react-native-async-storage/async-storage";
//dando problema aq
const useStorage = () => {

    const getItem = async(key) =>{
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];

        }catch(error){
            console.log("erro ao buscar",error)
            return[];
        }
    }

    const saveItem = async(key,value) =>{
        try{
            let passwords = await getItem(key);
            passwords.push(value);

            await AsyncStorage.setItem(key,JSON.stringify(passwords))

        }catch(error){
            console.log("ERRO AO SALVAR",error)
        }
    }

    const removeItem = async(key,item) =>{
        try{
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((pass) => {
                return (pass !== item)
            })
            await AsyncStorage.setItem(key,JSON.stringify(myPasswords))
            
            return myPasswords;
        }catch(error){
            console.log("Erro ao deletar", error)
        }
    }

    return{
        getItem,
        saveItem,
        removeItem
    }

    


}
export default useStorage;