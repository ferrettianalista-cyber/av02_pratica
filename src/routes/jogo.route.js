
import { jogosController } from '../controllers/jogo.controllers.js';

export const Router = Router();

jogosRouter.get('/', jogosController.getall);
jogosRouter.get('/:id',jogosController.getById);
jogosRouter.post('/',jogosController.create);
jogosRouter.put('/:id',jogosController.update);
jogosRouter.delete('/:id', jogosController.delete);