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
import axios from "axios";
import { useState } from "react";

export default function authPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    pass: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const API_URL = "/api/auth/login";
    // Api call
    try {
      const response = await axios.post(API_URL, formData);
      console.log(response);
      // const data = response.json();

      if (response.status === 200) {
        setLoading(false);
        setSuccess('Login successfully')

        setTimeout(() => {
          setSuccess("");
        }, 1200);
      }
      console.log(success);
      
    } catch (err) {
      // setError("Error logging in", err);
      // console.error("Error:", err);
      if(err.response){
        setError(err.response.data.message || 'Login failed')
      } else if(err.request){
        setError('Network error. Please try again');
      } else{
        setError('Unexpected error occured');
      }
      console.error('Error logging in: ',err);
    } finally{
       setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="w-full text-sm p-3 mb-2 text-red-700 bg-red-100 border border-red-300 rounded-md">
                {error}
              </div>
            )}
            {
              success && (
                <div className="w-full text-sm p-3 mb-2 text-green-700 bg-green-100 border  border-green-300 rounded-md">
                  {success}
                </div>
              )
            }
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      username: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.pass}
                  onChange={(e) =>
                    setFormData({ ...formData, pass: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
