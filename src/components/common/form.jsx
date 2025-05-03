import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CalenderIcon, Plus } from "../../utils/icon";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Button } from "../ui/button";

export default function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function renderInputsByComponentType(getControlItem) {
    const value = formData[getControlItem.name] || "";
    console.log(value, "peeyu");

    const commonInputProps = {
      name: getControlItem.name,
      id: getControlItem.name,
      placeholder: getControlItem.placeholder,
      value,
      onChange: (event) =>
        setFormData((prev) => ({
          ...prev,
          [getControlItem.name]: event.target.value,
        })),
      className:
        "flex placeholder:translate-y-[1px] items-center justify-center text-black text-xxs focus:outline-none focus-visible:ring-0 focus:border-1 focus:border-black rounded-[4px] border-s-1 border-[#E2E2E2] py-[10px] px-[16px] placeholder:text-[#9B959F]",
    };

    switch (getControlItem.componentType) {
      case "input":
        if (getControlItem.type === "password") {
          return (
            <div className="relative w-full">
              <Input
                {...commonInputProps}
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9B959F] text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          );
        } else {
          return <Input {...commonInputProps} type={getControlItem.type} />;
        }

      case "select":
        return (
          <Select
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                [getControlItem.name]: value,
              }))
            }
            value={value}
          >
            <SelectTrigger className="w-full flex placeholder:translate-y-[1px] items-center text-black text-xxs focus:outline-none focus-visible:ring-0 focus:border-1 focus:border-black rounded-[4px] border-s-1 border-[#E2E2E2] py-[20px] px-[16px] placeholder:text-[#9B959F]">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options?.length > 0 &&
                getControlItem.options.map((optionItem) => (
                  <SelectItem
                    className="bg-white cursor-pointer hover:bg-gray-200"
                    key={optionItem.id}
                    value={optionItem.id}
                  >
                    {optionItem.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            {...commonInputProps}
            id={getControlItem.id || getControlItem.name}
            rows={4}
          />
        );

      case "file":
        return (
          <div className="relative w-full cursor-pointer">
            <Input
              id={getControlItem.name}
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer z-0 h-full w-full"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFormData((prev) => ({
                    ...prev,
                    [getControlItem.name]: file,
                  }));
                }
              }}
            />
            <Label
              htmlFor={getControlItem.name}
              className="flex items-center justify-between border border-[#E2E2E2] w-full rounded-[4px] py-[13.5px] px-[16px] cursor-pointer z-10"
            >
              <span className="text-[#9B959F] text-xxs">
                {getControlItem.placeholder || "Upload File"}
              </span>
              <span className="flex justify-center items-center">
                <Plus className="h-[15px] w-[15px]" />
              </span>
            </Label>
          </div>
        );

      case "calendar":
        return (
          <Popover>
            <PopoverTrigger asChild>
              <div className="self-stretch h-11 px-4 py-2.5 bg-white rounded outline outline-neutral-200 inline-flex justify-start items-center gap-2">
                <div className="flex-1 self-stretch flex justify-start items-start gap-2.5">
                  <div className="flex-1 justify-start text-neutral-400 text-sm font-normal leading-normal">
                    Select Date
                  </div>
                </div>
                <div className="w-5 h-5 relative overflow-hidden">
                  <CalenderIcon className="h-full w-full" />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={value}
                // onSelect={field.onChange}

                className="w-full bg-white"
                initialFocus
              />
            </PopoverContent>
          </Popover>
        );

      default:
        return <Input {...commonInputProps} type={getControlItem.type} />;
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-[18px] max-sm:gap-[10px]">
        {formControls.map((controlItem, index) => {
          if (controlItem.row) {
            return (
              <div key={index} className="flex gap-[8px] justify-end items-end">
                {controlItem.row.map((item) => (
                  <div key={item.name} className="flex-1 gap-[8px]">
                    <div className="flex flex-col gap-[8px]">
                      {item.label && (
                        <Label className="text-xxs text-[#20102B] font-medium">
                          {item.label}
                        </Label>
                      )}
                      {renderInputsByComponentType(item)}
                    </div>
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <div key={controlItem.name} className="flex flex-col gap-[8px]">
                {controlItem.label && (
                  <Label className="text-xxs text-[#20102B] font-medium">
                    {controlItem.label}
                  </Label>
                )}
                {renderInputsByComponentType(controlItem)}
              </div>
            );
          }
        })}
      </div>
    </form>
  );
}
