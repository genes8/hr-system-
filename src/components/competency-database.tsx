'use client'

import { useState } from 'react'
import { Search, Plus, Edit, Trash2, ChevronDown, User, Map, History, FileText, BarChart, RefreshCw, FileBarChart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CompetencyDatabase() {
  const [competencies, setCompetencies] = useState([
    { id: 1, name: 'Upravljanje elektroenergetskim sistemima', category: 'Tehničke veštine', level: 'Ekspert' },
    { id: 2, name: 'Održavanje elektroenergetskih postrojenja', category: 'Tehničke veštine', level: 'Napredni' },
    { id: 3, name: 'Zaštita na radu u elektroenergetici', category: 'Bezbednost', level: 'Srednji' },
    { id: 4, name: 'Energetska efikasnost', category: 'Tehničke veštine', level: 'Napredni' },
    { id: 5, name: 'Obnovljivi izvori energije', category: 'Tehničke veštine', level: 'Srednji' },
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Baza kompetencija</h1>
      </div>
      
      <div className="flex-grow p-6">
        <Tabs defaultValue="competencies" className="space-y-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            <TabsTrigger value="competencies" className="px-2 py-1 text-sm">Kompetencije</TabsTrigger>
            <TabsTrigger value="employees" className="px-2 py-1 text-sm">Profili zaposlenih</TabsTrigger>
            <TabsTrigger value="mapping" className="px-2 py-1 text-sm">Mapiranje</TabsTrigger>
            <TabsTrigger value="search" className="px-2 py-1 text-sm">Pretraga veština</TabsTrigger>
            <TabsTrigger value="history" className="px-2 py-1 text-sm">Istorija razvoja</TabsTrigger>
            <TabsTrigger value="gap-analysis" className="px-2 py-1 text-sm">Gap analiza</TabsTrigger>
            <TabsTrigger value="reports" className="px-2 py-1 text-sm">Izveštaji</TabsTrigger>
          </TabsList>
          
          <TabsContent value="competencies">
            <Card>
              <CardHeader>
                <CardTitle>Lista kompetencija</CardTitle>
                <CardDescription>Pregled i upravljanje kompetencijama u Elektroprivredi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Pretraži kompetencije" className="pl-8" />
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Dodaj novu kompetenciju
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Naziv kompetencije</TableHead>
                        <TableHead>Kategorija</TableHead>
                        <TableHead>Nivo</TableHead>
                        <TableHead className="text-right">Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {competencies.map((competency) => (
                        <TableRow key={competency.id}>
                          <TableCell className="font-medium">{competency.name}</TableCell>
                          <TableCell>{competency.category}</TableCell>
                          <TableCell>{competency.level}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Otvori meni</span>
                                  <ChevronDown className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  <span>Izmeni</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Obriši</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="employees">
            <Card>
              <CardHeader>
                <CardTitle>Profili zaposlenih</CardTitle>
                <CardDescription>Detaljni pregled veština, iskustva i obrazovanja zaposlenih</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Pretraži zaposlene" className="pl-8" />
                  </div>
                  <Button>
                    <User className="h-4 w-4 mr-2" />
                    Dodaj novi profil
                  </Button>
                </div>
                <p>Ovde bi se prikazala lista zaposlenih sa opcijom za pregled detaljnog profila.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mapping">
            <Card>
              <CardHeader>
                <CardTitle>Mapiranje kompetencija</CardTitle>
                <CardDescription>Definisanje i mapiranje kompetencija prema radnim mestima</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>
                  <Map className="h-4 w-4 mr-2" />
                  Novo mapiranje
                </Button>
                <p className="mt-4">Ovde bi se prikazao interfejs za mapiranje kompetencija prema radnim mestima i organizacionim jedinicama.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="search">
            <Card>
              <CardHeader>
                <CardTitle>Napredna pretraga veština</CardTitle>
                <CardDescription>Pronađite zaposlene prema specifičnim veštinama</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Input placeholder="Unesite veštinu" className="w-full sm:w-auto" />
                  <Button>Pretraži</Button>
                </div>
                <p>Ovde bi se prikazali rezultati pretrage sa opcijama za filtriranje i sortiranje.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Istorija razvoja kompetencija</CardTitle>
                <CardDescription>Praćenje razvoja kompetencija zaposlenog kroz vreme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Input placeholder="Izaberite zaposlenog" className="w-full sm:w-auto" />
                  <Button>
                    <History className="h-4 w-4 mr-2" />
                    Prikaži istoriju
                  </Button>
                </div>
                <p>Ovde bi se prikazao grafikon ili vremenska linija razvoja kompetencija za izabranog zaposlenog.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="gap-analysis">
            <Card>
              <CardHeader>
                <CardTitle>Gap analiza</CardTitle>
                <CardDescription>Identifikacija razlika između trenutnih i potrebnih kompetencija</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Input placeholder="Izaberite radno mesto" className="w-full sm:w-auto" />
                  <Button>
                    <BarChart className="h-4 w-4 mr-2" />
                    Pokreni analizu
                  </Button>
                </div>
                <p>Ovde bi se prikazali rezultati gap analize sa preporukama za razvoj kompetencija.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Izveštaji o kompetencijama</CardTitle>
                <CardDescription>Generisanje izveštaja na različitim nivoima</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <select className="border rounded p-2 w-full sm:w-auto">
                    <option>Izaberite nivo izveštaja</option>
                    <option>Pojedinac</option>
                    <option>Tim</option>
                    <option>Organizacija</option>
                  </select>
                  <Button>
                    <FileBarChart className="h-4 w-4 mr-2" />
                    Generiši izveštaj
                  </Button>
                </div>
                <p>Ovde bi se prikazali generisani izveštaji sa opcijama za preuzimanje ili deljenje.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}