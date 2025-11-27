"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "@/components/ui/button";

function CreateGoal() {
  const [activeTab, setActiveTab] = useState("dreamGoal");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    targetDate: "",
    isPublic: false,
  });

  const [goalFormData, setGoalFormData] = useState({
    title: "",
    description: "",
    goalType: "",
    category: "",
    difficulty: "",
    frequency: "",
    linkToDreamGoal: false,
    baseXP: "",
    selectedDreamGoal: "",
  });

  const [step, setStep] = useState(1);
  const [dreamProgress, setDreamProgress] = useState("0%");
  const [goalProgress, setGoalProgress] = useState("0%");

  // Mock data for existing dream goals - replace with actual API call
  const [dreamGoals, setDreamGoals] = useState([
    { id: 1, title: "Learn Full Stack Development" },
    { id: 2, title: "Run a Marathon" },
    { id: 3, title: "Learn a New Language" },
  ]);

  const handleGoalInputChange = (e) => {
    const { name, value } = e.target;
    setGoalFormData({
      ...goalFormData,
      [name]: value,
    });
  };

  const calculateDreamGoalProgress = ()=>{
     const fields = [
        formData.title,
        formData.description,
        formData.category,
        formData.duration,
      ];
      const filledFields = fields.filter(
        (field) => field && field.trim() !== ""
      ).length;

      return `${Math.round((filledFields / fields.length) * 100)}%`;
  }

  const calculateMakeGoalProgress = () => {
    if (step === 1) {
        const step1Fields = [
          goalFormData.title,
          goalFormData.goalType,
          goalFormData.description,
        ];
        const filledFields = step1Fields.filter(
          (field) => field && field.trim() !== ""
        ).length;
        return `${(filledFields / step1Fields.length) * 50}%`; // Max 50% for step 1
      } else {
        const step1Fields = [goalFormData.title, goalFormData.goalType, goalFormData.description];
        const step2Fields = [goalFormData.category, goalFormData.difficulty, goalFormData.frequency];
        
        const step1Filled = step1Fields.filter(field => field && field.trim() !== "").length;
        const step2Filled = step2Fields.filter(field => field && field.trim() !== "").length;
        
        const step1Progress = (step1Filled / step1Fields.length) * 50; // 50% for step 1
        const step2Progress = (step2Filled / step2Fields.length) * 50; // 50% for step 2
        
        return `${Math.round(step1Progress + step2Progress)}%`;
      }
  };

useEffect(() => {
  setDreamProgress(calculateDreamGoalProgress());
}, [formData]);


useEffect(() => {
  setGoalProgress(calculateMakeGoalProgress());
}, [goalFormData, step]);

const getCurrentProgress = ()=>{
  console.log("dream progress",dreamProgress);
  return activeTab === "dreamGoal" ? dreamProgress : goalProgress
}

  useEffect(() => {
    if (formData.duration) {
      const today = new Date();
      const months = parseInt(formData.duration);
      const targetDate = new Date(today.setDate(today.getMonth() + months));
      setFormData((prev) => ({
        ...prev,
        targetDate: targetDate.toISOString().split("T")[0],
      }));
    }
  }, [formData.duration]);

  const difficultyXP = {
    easy: 150,
    medium: 250,
    hard: 350,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Card className="w-75 z-100">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardAction className="flex text-sm gap-3 mb-5 p-2 border rounded-2xl">
            <button
              className={`p-2 rounded-lg transition-all duration-500 ease-in-out
            ${activeTab === "dreamGoal" ? "bg-blue-800 text-white" : "bg-white text-black"}`}
              onClick={() => setActiveTab("dreamGoal")}
            >
              Dream Goal
            </button>
            <button
              className={`p-2 rounded-lg transition-all duration-500 ease-in-out
                 ${activeTab === "dreamGoal" ? "bg-white text-black" : "bg-blue-800 text-white p-2 rounded-lg "}`}
              onClick={() => setActiveTab("makeGoal")}
            >
              Make a Goal
            </button>
          </CardAction>
          <CardDescription key={activeTab} className="animate-fadeIn">
            {activeTab === "dreamGoal" ? "Define Dream" : "Instant Goal"}
          </CardDescription>

          {/* Step Progress */}
          <div
            className={`w-full transition-all duration-500 ease-in-out ${getCurrentProgress() === "0%" ? "opacity-0 " : "opacity-100 "}`}
          >
            {/* progress backg */}
            <div className={`h-2 bg-gray-300 rounded-full`}></div>
            <div
              className={`relative top-[-8] left-0 h-2 bg-blue-600 rounded-full`}
              style={{ width: getCurrentProgress() }}
            ></div>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === "dreamGoal" ? (
            <form className={`animate-fadeIn`}>
              <div className="flex flex-col text-sm gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter your goal title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    placeholder="Describe your dream goal"
                    name="description"
                    value={formData.description}
                    className="min-h-[80px] resize-none w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    className="w-full rounded-md border border-input  bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="coding">Coding</option>
                    <option value="fitness">Fitness</option>
                    <option value="health">Health</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                  </select>
                </div>
                {formData.targetDate && (
                  <div className="grid gap-2">
                    <Label htmlFor="targetDate">Target Completion Date</Label>
                    <Input
                      id="targetDate"
                      name="targetDate"
                      type="date"
                      value={formData.targetDate}
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                )}
                <div className="grid gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="isPublic"
                        name="isPublic"
                        checked={formData.isPublic}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isPublic: e.target.checked,
                          })
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded ${
                          formData.isPublic
                            ? "bg-blue-600 border-blue-600"
                            : "bg-white border-gray-300"
                        } flex items-center justify-center cursor-pointer`}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            isPublic: !formData.isPublic,
                          })
                        }
                      >
                        {formData.isPublic && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <Label
                      htmlFor="isPublic"
                      className="text-sm cursor-pointer"
                    >
                      Share goal publicly
                    </Label>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <form key={activeTab} className={`animate-fadeIn`}>
              <div className="flex flex-col text-sm gap-4">
                <div
                  className={`${step === 1 ? "opacity-100" : "opacity-0 hidden"}`}
                >
                  <div className="grid gap-2 mb-5">
                    <Label htmlFor="goalTitle">Title</Label>
                    <Input
                      id="goalTitle"
                      type="text"
                      placeholder="Enter your goal title"
                      name="title"
                      value={goalFormData.title}
                      onChange={handleGoalInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2 mb-5">
                    <Label htmlFor="goalType">Goal Type</Label>
                    <Input
                      id="goalType"
                      type="text"
                      placeholder="Enter goal type"
                      name="goalType"
                      value={goalFormData.goalType}
                      onChange={handleGoalInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2 mb-5">
                    <Label htmlFor="goalDescription">Description</Label>
                    <textarea
                      id="goalDescription"
                      placeholder="Describe your goal"
                      name="description"
                      value={goalFormData.description}
                      className="min-h-[80px] resize-none w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onChange={handleGoalInputChange}
                      required
                    />
                  </div>

                  {/* Step 2 */}
                </div>
                <div
                  className={`${step === 2 ? "opacity-100" : "opacity-0 hidden"}`}
                >
                  <div className="grid gap-2 mb-5">
                    <Label htmlFor="goalCategory">Category</Label>
                    <select
                      id="goalCategory"
                      name="category"
                      value={goalFormData.category}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onChange={handleGoalInputChange}
                      required
                    >
                      <option value="">Select category</option>
                      <option value="coding">Coding</option>
                      <option value="fitness">Fitness</option>
                      <option value="health">Health</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid gap-2 mb-5">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <select
                      id="difficulty"
                      name="difficulty"
                      value={goalFormData.difficulty}
                      onChange={handleGoalInputChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select difficulty</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="high">Hard</option>
                    </select>
                  </div>

                  <div className="grid gap-2 mb-5">
                    <Label htmlFor="frequency">Frequency</Label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={goalFormData.frequency}
                      onChange={handleGoalInputChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <div className="grid gap-2 mb-5">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="linkToDreamGoal"
                          name="linkToDreamGoal"
                          checked={goalFormData.linkToDreamGoal}
                          onChange={(e) =>
                            setGoalFormData({
                              ...goalFormData,
                              linkToDreamGoal: e.target.checked,
                              selectedDreamGoal: e.target.checked
                                ? goalFormData.selectedDreamGoal
                                : "",
                            })
                          }
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 border-2 rounded ${
                            goalFormData.linkToDreamGoal
                              ? "bg-blue-600 border-blue-600"
                              : "bg-white border-gray-300"
                          } flex items-center justify-center cursor-pointer`}
                          onClick={() =>
                            setGoalFormData({
                              ...goalFormData,
                              linkToDreamGoal: !goalFormData.linkToDreamGoal,
                              selectedDreamGoal: !goalFormData.linkToDreamGoal
                                ? goalFormData.selectedDreamGoal
                                : "",
                            })
                          }
                        >
                          {goalFormData.linkToDreamGoal && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <Label
                        htmlFor="linkToDreamGoal"
                        className="text-sm cursor-pointer"
                      >
                        Link to existing dream goal
                      </Label>
                    </div>

                    {/* Dream Goal Selection Dropdown - appears when checkbox is checked */}
                    {goalFormData.linkToDreamGoal && (
                      <div className="ml-8 mt-2">
                        <Label htmlFor="selectedDreamGoal" className="text-sm">
                          Select Dream Goal
                        </Label>
                        <select
                          id="selectedDreamGoal"
                          name="selectedDreamGoal"
                          value={goalFormData.selectedDreamGoal}
                          onChange={handleGoalInputChange}
                          className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required={goalFormData.linkToDreamGoal}
                        >
                          <option value="">Select a dream goal</option>
                          {dreamGoals.map((dreamGoal) => (
                            <option key={dreamGoal.id} value={dreamGoal.id}>
                              {dreamGoal.title}
                            </option>
                          ))}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">
                          This goal will be linked to your selected dream goal
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex gap-2">
          {/* <Button
            type="button"
            variant="outline"
            className={`${step === 1 ? "hidden" : "block"}  flex-1`}
            onClick={() => {
              if (activeTab === "dreamGoal") {
                setFormData({
                  title: "",
                  description: "",
                  category: "",
                  duration: "",
                  targetDate: "",
                });
              } else {
                setGoalFormData({
                  title: "",
                  description: "",
                  goalType: "",
                  category: "",
                  difficulty: "",
                  frequency: "",
                });
              }
            }}
          >
            Reset
          </Button> */}
          <Button
            type="button"
            className={`flex-1 ${activeTab === "makeGoal" && step === 1 ? " bg-green-600 hover:bg-green-500" : ""}`}
            onClick={
              ()=>{
               if(activeTab === "makeGoal" && step === 1){
                  setStep(2);
                } else if(activeTab === "makeGoal" && step === 2){
                  setStep(1);
                }
              }
            } 
          >
            {activeTab === "dreamGoal"
              ? "Create Vision"
              : step === 1
                ? "Next"
                : "Previous"}
          </Button>
          <Button
            type="submit"
            variant="outline"
            className={`${activeTab === "makeGoal"  && step === 2 ? "block" : "hidden"}  flex-1`}   
          >
            Set Goal
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CreateGoal;
