"use client";
import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function ForgotPassword({ params }) {
  const { resetToken } = use(params);
  const [formData, setFormData] = useState({
    resetToken: resetToken,
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_URL = "/api/auth/update-password";

  // Api Call
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError("");
      setSuccess("");
      const response = await axios.post(API_URL, formData);
      setSuccess(response.data.message);
      setTimeout(() => {
        setFormData({
          resetToken: resetToken,
          password: "",
          confirmPassword: "",
        });
        setSuccess("");
      }, 3200);
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset Your Password</CardTitle>
          <CardDescription>Enter your new password below</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="w-full text-sm p-3 mb-2 text-red-700 bg-red-100 border border-red-300 rounded-md">
              {error}
            </div>
          )}
          {success && (
            <div className="w-full text-sm p-3 mb-2 text-green-700 bg-green-100 border  border-green-300 rounded-md">
              {success}
            </div>
          )}
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                placeholder="Enter new password"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                placeholder="Confirm new password"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  });
                }}
                required
              />
            </div>
            <Button
              className="w-full"
              disabled={!formData.password || !formData.confirmPassword}
              onClick={handleSubmit}
            >
              Reset Password
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
