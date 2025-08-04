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

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    const API_URL = "/api/auth/register";

    // API call
    try {
      const response = await axios.post(API_URL, formData);
    //   console.log(response.data.message);
      setSuccess(response.data.message)
      router.push('/login');
    
    } catch (err) {
        // console.error("Error registering:",err);
        // console.log(err.response.data.message);
        setError(err.response.data.message);
    } finally{
        setLoading(false);
        setFormData({
            name:'',
            username:'',
            email:'',
            pass:'',
            confirmPass:''
        })
        setTimeout(() => {
            setError('');
            setSuccess('');
        }, 3100);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col">
          <div>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
              Enter your details below to create your account
            </CardDescription>
          </div>
          <CardAction className="ml-[-15]">
            <Button variant="link" onClick={() => router.push("/login")}>
              Already have an account? Login
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            {error && (
                <div className="w-full text-sm text-green-700 bg-green-100 border border-green-300 rounded-md p-3 mb-2">{error}</div>
            )}

            {success &&(               
                <div className="w-full text-sm text-red-700 bg-red-100 border border-red-300 rounded-md p-3 mb-2">{success}</div>
            )}
         
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="johndoe"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="john_doe"
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={formData.pass}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      pass: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm password"
                  type="password"
                  value={formData.confirmPass}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmPass: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={handleSubmit}>
           {loading?'Loading...': ' Create Account'}
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
