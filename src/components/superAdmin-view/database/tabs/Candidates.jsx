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
  Download,
  MapPin,
} from "lucide-react";
import Pagination from "../../../common/pagination";
import { useGetAllApplicants } from "../../../../hooks/superAdmin/useApplicant";

const CandidatesTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Fetch candidates data using the existing hook
  const {
    data: candidatesData,
    isLoading,
    error,
  } = useGetAllApplicants({
    page: currentPage,
    limit: 10,
    search: searchTerm,
  });

  const candidates = candidatesData?.data?.applicants || [];
  const totalPages = candidatesData?.data?.totalPages || 1;

  const handleDeleteCandidate = (candidate) => {
    setSelectedCandidate(candidate);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    // Implement delete logic here using the delete hook
    console.log("Deleting candidate:", selectedCandidate);
    setShowDeleteDialog(false);
    setSelectedCandidate(null);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading candidates...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-500">Error loading candidates</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <h1 className="text-2xl font-bold">Candidates</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search candidates..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Filter by Skills
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-[#6945ED] hover:bg-[#5a3bc4]">
            <Plus className="h-4 w-4 mr-2" />
            Add Candidate
          </Button>
        </div>
      </div>

      {/* Candidates Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-gray-900">
            {candidatesData?.data?.totalUsers || 0}
          </div>
          <div className="text-sm text-gray-500">Total Candidates</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-green-600">
            {candidates?.filter((c) => c.profileStatus === "active")?.length ||
              0}
          </div>
          <div className="text-sm text-gray-500">Active</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-blue-600">
            {candidates?.filter((c) => c.applicationStatus === "applied")
              ?.length || 0}
          </div>
          <div className="text-sm text-gray-500">Applied</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-yellow-600">
            {candidates?.filter((c) => c.profileStatus === "pending")?.length ||
              0}
          </div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
      </div>

      {/* Candidates Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      {(candidate.firstName || candidate.name || "U")
                        .charAt(0)
                        .toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {candidate.firstName || candidate.name || "Unknown"}{" "}
                        {candidate.lastName || ""}
                      </span>
                      <span className="text-sm text-gray-500">
                        {candidate.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills?.slice(0, 2).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    )) || (
                      <span className="text-gray-400 text-sm">
                        No skills listed
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {candidate.experience
                    ? `${candidate.experience} years`
                    : "Not specified"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                    {candidate.location || candidate.city || "Not specified"}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      candidate.profileStatus === "active"
                        ? "bg-green-100 text-green-800 border-green-300"
                        : candidate.profileStatus === "pending"
                        ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    }
                  >
                    {candidate.profileStatus || "Unknown"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {candidate.createdAt
                    ? new Date(candidate.createdAt).toLocaleDateString()
                    : "Unknown"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteCandidate(candidate)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {candidates.length === 0 && (
          <div className="text-center py-8">
            <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <div className="text-gray-500">No candidates found</div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Candidate</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "
              {selectedCandidate?.firstName || selectedCandidate?.name}"? This
              action cannot be undone.
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

export default CandidatesTab;
