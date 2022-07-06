import Plan from "../models/planModel.js";
 
export const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.findAll();
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        await delay(2000);
        res.json(plans);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(plan[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createPlan = async (req, res) => {
    try {
        await Plan.create(req.body);
        res.json({
            "message": "Plan Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePlan = async (req, res) => {
    try {
        await Plan.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Plan Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePlan = async (req, res) => {
    try {
        await Plan.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Plan Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}