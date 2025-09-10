import React, { useState } from "react";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { Badge } from "../../../ui/badge";
import {
  Search,
  Trash2,
  Plus,
  Users,
  Eye,
  Briefcase,
  UserCheck,
} from "lucide-react";
import Pagination from "../../../common/pagination";

const RecruitersTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  // Mock recruiters data - Replace with actual API call
  const recruiters = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@techrecruit.com",
      company: "TechRecruit Solutions",
      role: "Senior Recruiter",
      specializations: ["Tech", "Engineering", "Product"],
      experience: "5 years",
      jobsPosted: 42,
      candidatesHired: 156,
      activeJobs: 8,
      status: "active",
      joinedDate: "2023-03-15",
      rating: 4.7,
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@hrhub.com",
      company: "HR Hub",
      role: "Talent Acquisition Manager",
      specializations: ["Healthcare", "Finance", "Marketing"],
      experience: "7 years",
      jobsPosted: 68,
      candidatesHired: 203,
      activeJobs: 12,
      status: "active",
      joinedDate: "2022-11-20",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@startuptalent.com",
      company: "Startup Talent Co.",
      role: "Recruitment Consultant",
      specializations: ["Startup", "Sales", "Operations"],
      experience: "3 years",
      jobsPosted: 25,
      candidatesHired: 78,
      activeJobs: 5,
      status: "pending",
      joinedDate: "2024-01-08",
      rating: 4.5,
    },
  ];

  const filteredRecruiters = recruiters.filter(
    (recruiter) =>
      recruiter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recruiter.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recruiter.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recruiter.specializations.some((spec) =>
        spec.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleDeleteRecruiter = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    // Implement delete logic here
    console.log("Deleting recruiter:", selectedRecruiter);
    setShowDeleteDialog(false);
    setSelectedRecruiter(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Recruiters</h1>
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search recruiters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Briefcase className="h-4 w-4 mr-2" />
            Filter by Company
          </Button>
        </div>
        <Button size="sm" className="bg-[#6945ED] hover:bg-[#5a3bc4]">
          <Plus className="h-4 w-4 mr-2" />
          Add Recruiter
        </Button>
      </div>

      {/* Recruiters Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-gray-900">
            {recruiters.length}
          </div>
          <div className="text-sm text-gray-500">Total Recruiters</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-green-600">
            {recruiters.filter((r) => r.status === "active").length}
          </div>
          <div className="text-sm text-gray-500">Active</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-blue-600">
            {recruiters.reduce(
              (sum, recruiter) => sum + recruiter.jobsPosted,
              0
            )}
          </div>
          <div className="text-sm text-gray-500">Jobs Posted</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-purple-600">
            {recruiters.reduce(
              (sum, recruiter) => sum + recruiter.candidatesHired,
              0
            )}
          </div>
          <div className="text-sm text-gray-500">Candidates Hired</div>
        </div>
      </div>

      {/* Recruiters Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Recruiter</TableHead>
              <TableHead>Company & Role</TableHead>
              <TableHead>Specializations</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Active Jobs</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecruiters.map((recruiter) => (
              <TableRow key={recruiter.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <UserCheck className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{recruiter.name}</span>
                      <span className="text-sm text-gray-500">
                        {recruiter.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{recruiter.company}</span>
                    <span className="text-sm text-gray-500">
                      {recruiter.role}
                    </span>
                    <span className="text-xs text-gray-400">
                      {recruiter.experience} experience
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {recruiter.specializations
                      .slice(0, 2)
                      .map((spec, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {spec}
                        </Badge>
                      ))}
                    {recruiter.specializations.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{recruiter.specializations.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <div className="text-sm">
                      <span className="font-medium">
                        {recruiter.jobsPosted}
                      </span>{" "}
                      jobs posted
                    </div>
                    <div className="text-sm text-green-600">
                      <span className="font-medium">
                        {recruiter.candidatesHired}
                      </span>{" "}
                      hired
                    </div>
                    <div className="text-xs text-gray-500">
                      Rating: {recruiter.rating}/5.0
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${
                      recruiter.activeJobs > 5
                        ? "bg-green-50 text-green-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {recruiter.activeJobs} active
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      recruiter.status === "active"
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }
                  >
                    {recruiter.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" title="View Profile">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="View Jobs">
                      <Briefcase className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteRecruiter(recruiter)}
                      className="text-red-600 hover:text-red-700"
                      title="Delete Recruiter"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredRecruiters.length === 0 && (
          <div className="text-center py-8">
            <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <div className="text-gray-500">No recruiters found</div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredRecruiters.length / 10)}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Recruiter</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{selectedRecruiter?.name}" from{" "}
              {selectedRecruiter?.company}? This action cannot be undone and
              will affect all associated job postings.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecruitersTab;
