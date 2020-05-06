
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

//const sceneLoader = new SceneLoader(); 


const ModelImport ={

    /**
     * 
     * @param {*} meshName 
     * @param {*} rootURLPath 
     * @param {*} filename 
     * @param {*} scene 
     */
    importBabylon: function(meshName,rootURLPath,fileName,scene){
        SceneLoader.ImportMeshAsync(meshName, rootURLPath, fileName, scene).then((result)=> {

        });
    }
};

export {ModelImport};