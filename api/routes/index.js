import express from "express";
 
import { 
    getAllPlans,
    createPlan,
    getPlanById,
    updatePlan,
    deletePlan
} from "../controllers/Plans.js";
 
const router = express.Router();
 
router.get('/', getAllPlans);
router.get('/:id', getPlanById);
router.post('/', createPlan);
router.patch('/:id', updatePlan);
router.delete('/:id', deletePlan);
 
export default router;