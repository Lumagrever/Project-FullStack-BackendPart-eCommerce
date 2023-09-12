import {Router} from "express"
import { getOrdenes, createOrder } from "../controllers/orderts"
import { recolectarErrores } from "../middlewares/recolectarErrores";
import validarJWT from "../middlewares/validarJWT"
import { isVerified } from "../middlewares/validarVerificado";
import {check} from "express-validator"

const router = Router()

router.get("/", [validarJWT, recolectarErrores],getOrdenes)

router.post("/", [validarJWT, isVerified,
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("shippingCost", "El costo de envío es obligatorio").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("shippingDetails", "Los detalles de envío son obligatorios").not().isEmpty(),
    check("items", "El array de productos es obligatorio").not().isEmpty(),
    recolectarErrores,
], createOrder);

export default router