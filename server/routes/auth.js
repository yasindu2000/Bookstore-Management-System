import express from "express";
import { Admin } from "../models/Admin";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
const router = express.Router();