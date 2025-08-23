import Address from "../models/Address.js"
import User from "../models/User.js"
        
        // Add
        export const addAddress = async (req, res) => {
          try {
            const userId = req.user._id;
            const newAddress = await Address.create({ ...req.body.address, userId,});
            res.json({
              success: true,
              message: "Address added",
              address: newAddress,
            });
          } catch (error) {
            res.json({ success: false, message: error.message });
          }
        };

        // Get
        export const getAddress = async (req, res) => {
          try {
            const userId = req.user._id;
            const addresses = await Address.find({ userId });
            res.json({ success: true, addresses });
          } catch (error) {
            res.json({ success: false, message: error.message });
          }
        };



