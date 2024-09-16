"use client";

import { useState } from 'react'
import { Search, Plus, ChevronDown, ChevronRight, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Mapping {
  id: number;
  position: string;
  department: string;
  competencies: string[];
}

export default function CompetencyMapping() {
  const [mappings, setMappings] = useState<Mapping[]>([
    { id: 1, position: "Inženjer elektroenergetike", department: "Distribucija", competencies: ["Upravljanje elektroenergetskim sistemima", "Analiza podataka u energetici", "Energetska efikasnost"] },
    { id: 2, position: "Tehničar za održavanje", department: "Proizvodnja", competencies: ["Održavanje elektroenergetskih postrojenja", "Zaštita na radu u elektroenergetici"] },
    { id: 3, position: "Analitičar za energetsku efikasnost", department: "Razvoj", competencies: ["Energetska efikasnost", "Obnovljivi izvori energije", "Analiza podataka u energetici"] },
  ])

  const [selectedMapping, setSelectedMapping] = useState<Mapping | null>(null)

  const departments = ["Distribucija", "Proizvodnja", "Razvoj", "Upravljanje", "Finansije"]
  const allCompetencies = [
    "Upravljanje elektroenergetskim sistemima",
    "Analiza podataka u energetici",
    "Energetska efikasnost",
    "Održavanje elektroenergetskih postrojenja",
    "Zaštita na radu u elektroenergetici",
    "Obnovljivi izvori energije",
    "Finansijsko planiranje u energetici",
    "Upravljanje projektima u energetskom sektoru",
    "Regulativa u energetici",
    "Komunikacija sa korisnicima",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Mapiranje kompetencija</h1>
      </div>
      
      <div className="flex-grow p-6">
        <Tabs defaultValue="existing" className="space-y-6">
          <TabsList>
            <TabsTrigger value="existing">Postojeća mapiranja</TabsTrigger>
            <TabsTrigger value="new">Novo mapiranje</TabsTrigger>
          </TabsList>
          
          <TabsContent value="existing">
            <Card>
              <CardHeader>
                <CardTitle>Pregled mapiranja kompetencija</CardTitle>
                <CardDescription>Pregledajte i upravljajte postojećim mapiranjima kompetencija prema radnim mestima i organizacionim jedinicama</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <div className="relative w-64">
                    {/* Uklanjamo ikonicu lupe */}
                    <Input placeholder="Pretraži mapiranja" className="pl-3" /> {/* Smanjujemo levi padding */}
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filtriraj po sektoru" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {mappings.map((mapping) => (
                    <Accordion type="single" collapsible key={mapping.id}>
                      <AccordionItem value={`mapping-${mapping.id}`}>
                        <AccordionTrigger className="hover:bg-gray-100 px-4 rounded-lg">
                          <div className="flex justify-between items-center w-full">
                            <span className="font-medium">{mapping.position}</span>
                            <span className="text-sm text-gray-500">{mapping.department}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <h4 className="font-semibold mb-2">Potrebne kompetencije:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {mapping.competencies.map((comp, index) => (
                              <li key={index}>{comp}</li>
                            ))}
                          </ul>
                          <div className="mt-4 flex justify-end space-x-2">
                            <Button variant="outline" size="sm" onClick={() => setSelectedMapping(mapping)}>
                              Izmeni
                            </Button>
                            <Button variant="destructive" size="sm">Obriši</Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="new">
            <Card>
              <CardHeader>
                <CardTitle>Kreiraj novo mapiranje kompetencija</CardTitle>
                <CardDescription>Definiši novo mapiranje kompetencija za radno mesto i organizacionu jedinicu</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-medium">Radno mesto</label>
                      <Input id="position" placeholder="Unesite naziv radnog mesta" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="department" className="text-sm font-medium">Organizaciona jedinica</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Izaberite organizacionu jedinicu" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Potrebne kompetencije</label>
                    <div className="border rounded-md p-4 space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {allCompetencies.slice(0, 3).map((comp, index) => (
                          <div key={index} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm flex items-center">
                            {comp}
                            <button className="ml-2 text-blue-600 hover:text-blue-800">
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Dodaj kompetenciju" />
                        </SelectTrigger>
                        <SelectContent>
                          {allCompetencies.map((comp) => (
                            <SelectItem key={comp} value={comp}>{comp}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button className="w-full">Sačuvaj mapiranje</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {selectedMapping && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-lg">
              <CardHeader>
                <CardTitle>Izmeni mapiranje kompetencija</CardTitle>
                <CardDescription>Ažuriraj mapiranje za {selectedMapping.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="edit-position" className="text-sm font-medium">Radno mesto</label>
                    <Input id="edit-position" defaultValue={selectedMapping.position} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="edit-department" className="text-sm font-medium">Organizaciona jedinica</label>
                    <Select defaultValue={selectedMapping.department}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Potrebne kompetencije</label>
                    <div className="border rounded-md p-4 space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {selectedMapping.competencies.map((comp, index) => (
                          <div key={index} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm flex items-center">
                            {comp}
                            <button className="ml-2 text-blue-600 hover:text-blue-800">
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Dodaj kompetenciju" />
                        </SelectTrigger>
                        <SelectContent>
                          {allCompetencies.map((comp) => (
                            <SelectItem key={comp} value={comp}>{comp}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setSelectedMapping(null)}>Otkaži</Button>
                    <Button>Sačuvaj izmene</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}