import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadSistema = () => api.get('sistema');
export const saveProjeto = (novoProjeto) => api.post("projeto", novoProjeto);

export const loadProjetoPorSistema = (sistema) => api.get('projeto?sistema=' + sistema);
export const deleteProjetoItem = (id) => api.delete('projeto/' + id);
export const LoadSistemaPorId = (id) => api.get('projeto/' + id);



const apis = {
  loadSistema: loadSistema,
  saveProjeto: saveProjeto,
  loadProjetoPorSistema: loadProjetoPorSistema,
  deleteProjetoItem: deleteProjetoItem,
  LoadSistemaPorId: LoadSistemaPorId


};

export default apis
