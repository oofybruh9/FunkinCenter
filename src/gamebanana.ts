// the gamebanana api (handles the finding of mods)
// official docs here: https://www.postman.com/s0nought/gb-api-v11/collection/of7s6ao/gb-api-v11


const baseurl = "https://gamebanana.com/apiv11/Game/8694/"
const modinfo = "https://gamebanana.com/apiv11/Mod/"

async function getTopSubmissions() {
    const url = baseurl + "TopSubs"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        return(result);
    } catch (error) {
        console.error((error as Error).message);
    }
}

async function getMod(id: number){
    const url = modinfo + id
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        return(result);
    } catch (error) {
        console.error((error as Error).message);
    }
}

async function searchFNF(query: string, sort: number, page: number){
    const url = `${baseurl}Subfeeed?_nPage=${page}&_sSort=${sort}&_sName=${query}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return(result);
    } catch (error) {
        console.error((error as Error).message);
    }
}
