"use client";

import Main from "@/components/ui/main";

import {
  Button,
  Input,
  Slider,
  Select,
  SelectItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faLock,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import copyToClipboard from "clipboard-copy";
import { Toaster, toast } from "sonner";

config.autoAddCss = false;

const generatePassword = (length, useUppercase, useNumbers, useSymbols) => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-+=";

  let characters = lowercaseChars;

  if (useUppercase) {
    characters += uppercaseChars;
  }

  if (useNumbers) {
    characters += numberChars;
  }

  if (useSymbols) {
    characters += symbolChars;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
};

export default function HomePage() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [selectedConfig, setSelectedConfig] = useState(new Set());

  // This effect updates the selected config when the user changes the config
  useEffect(() => {
    const newConfig = new Set();

    if (useUppercase) newConfig.add("useUppercase");
    if (useNumbers) newConfig.add("useNumbers");
    if (useSymbols) newConfig.add("useSymbols");

    setSelectedConfig(newConfig);
  }, [useUppercase, useNumbers, useSymbols]);

  // This function generates a new password with the current configuration
  const handleGeneratePassword = () => {
    const newPassword = generatePassword(
      length,
      useUppercase,
      useNumbers,
      useSymbols
    );
    setPassword(newPassword);
  };

  // This function copies the current password to the clipboard
  const handleCopyToClipboard = () => {
    if (password) {
      try {
        copyToClipboard(password);

        toast.success("Contraseña Copiada", {
          description: "La contraseña ha sido copiada al portapapeles.",
        });
      } catch (error) {
        toast.error("Error", {
          description: "Error al generar una contraseña.",
        });
      }
    } else {
      toast.info("Genera una contraseña antes de intentar copiarla.");
    }
  };

  // This function handles the select component change
  const handleSelectChange = (selectedKeys) => {
    setSelectedConfig(new Set(selectedKeys));
  };

  return (
    <Main flexCenter={true} flexCol={true}>
      <Card className="w-11/12 sm:w-[500px] bg-white-primary/90 backdrop-blur-sm border-1 border-gray-primary">
        <CardHeader className="flex flex-center justify-center">
          <h1 className="text-4xl font-title">Generador de Contraseña</h1>
        </CardHeader>

        <CardBody className="flex flex-col gap-6 py-10">
          <Input
            label="Contraseña Generada"
            value={password}
            disabled
            startContent={<FontAwesomeIcon icon={faLock} />}
            endContent={
              <Tooltip content="Copiar contraseña">
                <Button className="bg-black" onClick={handleCopyToClipboard}>
                  <FontAwesomeIcon icon={faCopy} color="white" size="xl" />
                </Button>
              </Tooltip>
            }
          />
          <Slider
            label="Longitud de la Contraseña"
            value={length}
            onChange={(value) => setLength(value)}
            maxValue={20}
            minValue={8}
            marks={[
              {
                value: 8,
                label: "8",
              },
              {
                value: 12,
                label: "12",
              },
              {
                value: 16,
                label: "16",
              },
              {
                value: 20,
                label: "20",
              },
            ]}
            step={2}
            showSteps={true}
            showTooltip={true}
            color="foreground"
          />
          <Select
            variant="bordered"
            label="Configuración de la Contraseña"
            selectionMode="multiple"
            selectedKeys={Array.from(selectedConfig)}
            onSelectionChange={(value) => handleSelectChange(value)}
          >
            <SelectItem
              value="useUppercase"
              key="useUppercase"
              onClick={() => setUseUppercase(!useUppercase)}
            >
              Usar Mayúsculas
            </SelectItem>
            <SelectItem
              key="useNumbers"
              value="useNumbers"
              onClick={() => setUseNumbers(!useNumbers)}
            >
              Usar Números
            </SelectItem>
            <SelectItem
              key="useSymbols"
              value="useSymbols"
              onClick={() => setUseSymbols(!useSymbols)}
            >
              Usar Símbolos
            </SelectItem>
          </Select>

          <Button
            onClick={handleGeneratePassword}
            className="bg-black text-white"
            endContent={<FontAwesomeIcon icon={faRotateRight} />}
          >
            Generar Contraseña
          </Button>
        </CardBody>

        <CardFooter className="flex justify-center items-center">
          <p className="text-sm text-neutral-500">
            Desarrollador por{" "}
            <a
              href="https://www.instagram.com/fermeridamagni"
              className="underline"
              target="_blank"
            >
              @fermeridamagni
            </a>
          </p>
        </CardFooter>
      </Card>

      <Toaster richColors closeButton />
    </Main>
  );
}
