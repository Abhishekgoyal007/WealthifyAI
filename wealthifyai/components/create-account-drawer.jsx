"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/app/lib/schema";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { createAccount } from "@/actions/dashboard";
import { Loader2 } from "lucide-react";

const CreateAccountDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Manually handle loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createAccount(data);
      reset(); // Reset form after submission
      setOpen(false); // Close drawer
    } catch (error) {
      console.error("Error creating account:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create a New Account</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Account Name
                </label>
                <Input id="name" placeholder="e.g., Main Checking" {...register("name")} />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">
                  Account Type
                </label>
                <Select
                  onValueChange={(value) => setValue("type", value)}
                  value={watch("type")}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CURRENT">Current</SelectItem>
                    <SelectItem value="SAVINGS">Savings</SelectItem>
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="text-sm text-red-500">{errors.type.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="balance" className="text-sm font-medium">
                  Initial Balance
                </label>
                <Input
                  id="balance"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...register("balance")}
                />
                {errors.balance && (
                  <p className="text-sm text-red-500">{errors.balance.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <label htmlFor="isDefault" className="text-sm font-medium cursor-pointer">
                    Set As Default
                  </label>
                  <p className="text-sm text-muted-foreground">
                    This account will be selected by default for transactions.
                  </p>
                </div>
                <Switch
                  id="isDefault"
                  onCheckedChange={(checked) => setValue("isDefault", checked)}
                  checked={watch("isDefault")}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <DrawerClose asChild>
                  <Button type="button" variant="outline" className="flex-1">
                    Cancel
                  </Button>
                </DrawerClose>
                <Button type="submit" className="flex-1 gap-2" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateAccountDrawer;
