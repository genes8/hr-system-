"use client";

import { useState } from 'react'
import { Search, Plus, Edit, Trash2, ChevronDown, User, Book, Award, Briefcase, BarChart, FileText } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  avatar: string;
}

export default function EmployeeProfiles() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'Ana Petrović', position: 'Inženjer elektroenergetike', department: 'Distribucija', avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%202-gSN7PvwteaPSJD5vgamH5zywzrkGgx.webp' },
    { id: 2, name: 'Marko Nikolić', position: 'Tehničar za održavanje', department: 'Proizvodnja', avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Man%20pic-dTKrDztZd2ogCdfQRhNJd3CE42fOYQ.webp' },
    { id: 3, name: 'Jovana Đorđević', position: 'Analitičar za energetsku efikasnost', department: 'Razvoj', avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%201-QeeaTOnPFd3iHJGPqO7hdRRS390mI9.webp' },
  ])

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Profili zaposlenih</h1>
      </div>
      
      <div className="flex-grow p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <Card className="w-full lg:w-1/3">
            <CardHeader>
              <CardTitle>Lista zaposlenih</CardTitle>
              <CardDescription>Pregled i upravljanje profilima zaposlenih</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 mb-6">
                <div className="relative">
                  {/* Uklanjamo ikonicu lupe */}
                  <Input placeholder="Pretraži zaposlene" className="pl-3" /> {/* Smanjujemo levi padding */}
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Dodaj novog zaposlenog
                </Button>
              </div>

              <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ime</TableHead>
                      <TableHead>Pozicija</TableHead>
                      <TableHead className="text-right">Akcije</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id} className="cursor-pointer hover:bg-gray-100" onClick={() => setSelectedEmployee(employee)}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-2">
                              <AvatarImage src={employee.avatar} alt={employee.name} />
                              <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            {employee.name}
                          </div>
                        </TableCell>
                        <TableCell>{employee.position}</TableCell>
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

          <Card className="w-full lg:w-2/3">
            <CardHeader>
              <CardTitle>Detalji profila</CardTitle>
              <CardDescription>Detaljne informacije o zaposlenom</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedEmployee ? (
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-4 mb-4">
                    <TabsTrigger value="overview">Pregled</TabsTrigger>
                    <TabsTrigger value="skills">Veštine</TabsTrigger>
                    <TabsTrigger value="education">Obrazovanje</TabsTrigger>
                    <TabsTrigger value="certifications">Sertifikati</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="flex items-center mb-6">
                      <Avatar className="h-24 w-24 mr-4">
                        <AvatarImage src={selectedEmployee.avatar} alt={selectedEmployee.name} />
                        <AvatarFallback>{selectedEmployee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-2xl font-bold">{selectedEmployee.name}</h2>
                        <p className="text-gray-500">{selectedEmployee.position}</p>
                        <p className="text-gray-500">{selectedEmployee.department}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2">Kontakt informacije</h3>
                        <p>Email: {selectedEmployee.name.toLowerCase().replace(' ', '.')}@elektroprivreda.com</p>
                        <p>Telefon: +381 11 123 4567</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Radno iskustvo</h3>
                        <p>5 godina u Elektroprivredi</p>
                        <p>2 godine na trenutnoj poziciji</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="skills">
                    <h3 className="font-semibold mb-4">Ključne veštine</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Upravljanje elektroenergetskim sistemima</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="w-full" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Analiza podataka u energetici</span>
                          <span>70%</span>
                        </div>
                        <Progress value={70} className="w-full" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Energetska efikasnost</span>
                          <span>90%</span>
                        </div>
                        <Progress value={90} className="w-full" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="education">
                    <h3 className="font-semibold mb-4">Obrazovanje</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Book className="h-5 w-5 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Elektrotehnički fakultet</p>
                          <p className="text-sm text-gray-500">Diplomirani inženjer elektrotehnike, 2015</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Book className="h-5 w-5 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Tehnička škola "Nikola Tesla"</p>
                          <p className="text-sm text-gray-500">Elektrotehničar energetike, 2011</p>
                        </div>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="certifications">
                    <h3 className="font-semibold mb-4">Sertifikati</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Award className="h-5 w-5 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Upravljanje elektroenergetskim sistemima</p>
                          <p className="text-sm text-gray-500">Izdao: IEEE Power & Energy Society, 2020</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="h-5 w-5 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Energetska efikasnost u industriji</p>
                          <p className="text-sm text-gray-500">Izdao: Ministarstvo rudarstva i energetike, 2019</p>
                        </div>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="flex flex-col items-center justify-center h-64">
                  <User className="h-16 w-16 text-gray-400 mb-4" />
                  <p className="text-xl text-gray-500">Izaberite zaposlenog da vidite detalje</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}