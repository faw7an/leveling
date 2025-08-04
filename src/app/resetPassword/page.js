"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function ResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const API_URL = "/api/auth/reset-password";

    try {
      const response = await axios.post(API_URL, {email});
      console.log(response.data.message);
      setSuccess(response.data.message);

    } catch (err) {
      console.error(err.response?.data.message);
      setError(err.response?.data.message);
    } finally {
      setEmail("");
      setTimeout(() => {
        setError("");
        setSuccess('');
      }, 3200);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>
            Enter your email below to receive a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            {error && (
              <div className="w-full text-sm text-green-700 bg-green-100 border border-green-300 rounded-md p-3 mb-2">
                {error}
              </div>
            )}

            {success && (
              <div className="w-full text-sm text-red-700 bg-red-100 border border-red-300 rounded-md p-3 mb-2">
                {success}
              </div>
            )}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={handleSubmit} disabled={!email}>
            Send Reset Link
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => router.push("/login")}
          >
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
