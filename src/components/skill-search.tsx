'use client'

import { useState } from 'react'
import { Search, Filter, X, ChevronDown, ChevronUp, User } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SkillSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [sortColumn, setSortColumn] = useState<'name' | 'position' | 'department'>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const skills = [
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

  const departments = ["Distribucija", "Proizvodnja", "Razvoj", "Upravljanje", "Finansije"]

  const employees = [
    { id: 1, name: "Ana Petrović", position: "Inženjer elektroenergetike", department: "Distribucija", skills: ["Upravljanje elektroenergetskim sistemima", "Analiza podataka u energetici", "Energetska efikasnost"], avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%202-gSN7PvwteaPSJD5vgamH5zywzrkGgx.webp" },
    { id: 2, name: "Marko Nikolić", position: "Tehničar za održavanje", department: "Proizvodnja", skills: ["Održavanje elektroenergetskih postrojenja", "Zaštita na radu u elektroenergetici"], avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Man%20pic-dTKrDztZd2ogCdfQRhNJd3CE42fOYQ.webp" },
    { id: 3, name: "Jovana Đorđević", position: "Analitičar za energetsku efikasnost", department: "Razvoj", skills: ["Energetska efikasnost", "Obnovljivi izvori energije", "Analiza podataka u energetici"], avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%201-QeeaTOnPFd3iHJGPqO7hdRRS390mI9.webp" },
    { id: 4, name: "Nikola Jovanović", position: "Menadžer projekata", department: "Upravljanje", skills: ["Upravljanje projektima u energetskom sektoru", "Finansijsko planiranje u energetici", "Komunikacija sa korisnicima"], avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man%20pic%202-0kz43JiIZOEkZq3cQTrKGQsRfwOZ4K.webp" },
    { id: 5, name: "Milica Stojanović", position: "Pravni savetnik", department: "Finansije", skills: ["Regulativa u energetici", "Komunikacija sa korisnicima"], avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%203-cmIfb2M5ettI5cGYKxaQbfpoqyTTYG.webp" },
  ]

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          employee.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesSkills = selectedSkills.length === 0 || selectedSkills.every(skill => employee.skills.includes(skill))
    const matchesDepartments = selectedDepartments.length === 0 || selectedDepartments.includes(employee.department)
    return matchesSearch && matchesSkills && matchesDepartments
  }).sort((a, b) => {
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const handleSort = (column: 'name' | 'position' | 'department') => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Pretraga veština</h1>
      </div>
      
      <div className="flex-grow p-6">
        <Card>
          <CardHeader>
            <CardTitle>Napredna pretraga zaposlenih po veštinama</CardTitle>
            <CardDescription>Pronađite zaposlene na osnovu njihovih veština, pozicija ili drugih kriterijuma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Pretraži po imenu, poziciji ili veštini" 
                    className="pl-10" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Filter className="mr-2 h-4 w-4" />
                      Filteri
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Veštine</h4>
                        <div className="space-y-2">
                          {skills.map((skill) => (
                            <div key={skill} className="flex items-center">
                              <Checkbox 
                                id={skill} 
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={(checked) => {
                                  setSelectedSkills(
                                    checked
                                      ? [...selectedSkills, skill]
                                      : selectedSkills.filter((s) => s !== skill)
                                  )
                                }}
                              />
                              <label htmlFor={skill} className="ml-2 text-sm">{skill}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Organizacione jedinice</h4>
                        <div className="space-y-2">
                          {departments.map((department) => (
                            <div key={department} className="flex items-center">
                              <Checkbox 
                                id={department} 
                                checked={selectedDepartments.includes(department)}
                                onCheckedChange={(checked) => {
                                  setSelectedDepartments(
                                    checked
                                      ? [...selectedDepartments, department]
                                      : selectedDepartments.filter((d) => d !== department)
                                  )
                                }}
                              />
                              <label htmlFor={department} className="ml-2 text-sm">{department}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {(selectedSkills.length > 0 || selectedDepartments.length > 0) && (
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSelectedSkills(selectedSkills.filter(s => s !== skill))}
                      />
                    </Badge>
                  ))}
                  {selectedDepartments.map((department) => (
                    <Badge key={department} variant="outline" className="flex items-center gap-1">
                      {department}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSelectedDepartments(selectedDepartments.filter(d => d !== department))}
                      />
                    </Badge>
                  ))}
                </div>
              )}

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">
                        <Button variant="ghost" onClick={() => handleSort('name')} className="flex items-center">
                          Ime
                          {sortColumn === 'name' && (
                            sortDirection === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button variant="ghost" onClick={() => handleSort('position')} className="flex items-center">
                          Pozicija
                          {sortColumn === 'position' && (
                            sortDirection === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button variant="ghost" onClick={() => handleSort('department')} className="flex items-center">
                          Organizaciona jedinica
                          {sortColumn === 'department' && (
                            sortDirection === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>Veštine</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEmployees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={employee.avatar} alt={employee.name} />
                              <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span>{employee.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {employee.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}